"use client";

import { useState } from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Loader, ChartBar, ChartLine, ArrowUp, ArrowDown } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

const companyNames = {
  AAPL: "Apple Inc.",
  AMZN: "Amazon.com Inc.",
  MSFT: "Microsoft Corporation",
  USO: "United States Oil Fund",
  GLD: "SPDR Gold Shares",
  TSLA: "Tesla, Inc.",
};

const AVAILABLE_SYMBOLS = ["AAPL", "AMZN", "MSFT", "USO", "GLD", "TSLA"];

const fetchStockData = async (symbol) => {
  try {
    const response = await fetch(`/api/stock-prices/${symbol}`);
    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Error:", errorText);
      throw new Error(
        `Failed to fetch stock data: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("Invalid data format received from API");
    }
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

const Index = () => {
  const [selectedSymbol, setSelectedSymbol] = useState("AAPL");

  const { data, isLoading, error } = useQuery({
    queryKey: ["stock-data", selectedSymbol],
    queryFn: () => fetchStockData(selectedSymbol),
    retry: 2,
    staleTime: 30000,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader className="h-8 w-8 animate-spin text-[#006200]" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="container mx-auto py-8">
        <p className="text-red-500">
          Error loading stock data: {error?.message || "Unknown error"}
        </p>
      </div>
    );
  }

  const chartData = data
    .map((item) => ({
      date: item.date,
      price: item.close,
    }))
    .reverse();

  const StockStats = ({ data }) => {
    const priceChange = data.close - data.open;
    const priceChangePercent = (priceChange / data.open) * 100;
    const isPositive = priceChange >= 0;

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in">
        <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Price</CardTitle>
            <ChartLine className="h-4 w-4 text-[#006200]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#006200]">
              ${data.close.toFixed(2)}
            </div>
            <div
              className={`flex items-center text-sm ${
                isPositive ? "text-green-500" : "text-red-500"
              } transition-colors`}
            >
              {isPositive ? (
                <ArrowUp className="h-4 w-4" />
              ) : (
                <ArrowDown className="h-4 w-4" />
              )}
              <span>{Math.abs(priceChangePercent).toFixed(2)}%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Trading Volume
            </CardTitle>
            <ChartBar className="h-4 w-4 text-[#006200]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#006200]">
              {(data.volume / 1_000_000).toFixed(2)}M
            </div>
            <p className="text-xs text-muted-foreground">Shares traded</p>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Trading Range</CardTitle>
            <ChartBar className="h-4 w-4 text-[#006200]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#006200]">
              ${data.high.toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground">
              High: ${data.high.toFixed(2)} Low: ${data.low.toFixed(2)}
            </p>
          </CardContent>
        </Card>
      </div>
    );
  };

  const StockChart = ({ data }) => {
    return (
      <div className="w-full h-[300px] bg-white rounded-lg shadow-sm p-4 transition-all duration-300 hover:shadow-lg">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="date"
              tickFormatter={(value) => new Date(value).toLocaleDateString()}
            />
            <YAxis />
            <Tooltip
              labelFormatter={(value) => new Date(value).toLocaleDateString()}
              formatter={(value) => [`$${value.toFixed(2)}`, "Price"]}
              contentStyle={{
                backgroundColor: "white",
                borderRadius: "8px",
                border: "1px solid #eee",
              }}
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#006200"
              strokeWidth={2}
              dot={false}
              animationDuration={1000}
              animationEasing="ease-in-out"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };

  const StockTable = ({ data }) => {
    return (
      <div className="rounded-md border shadow-sm transition-all duration-300 hover:shadow-md animate-fade-in">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold">Date</TableHead>
              <TableHead className="font-semibold">Open</TableHead>
              <TableHead className="font-semibold">High</TableHead>
              <TableHead className="font-semibold">Low</TableHead>
              <TableHead className="font-semibold">Close</TableHead>
              <TableHead className="font-semibold">Volume</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                className="transition-colors hover:bg-[#00620010]"
              >
                <TableCell>{new Date(row.date).toLocaleDateString()}</TableCell>
                <TableCell className="font-medium">
                  ${row.open.toFixed(2)}
                </TableCell>
                <TableCell className="text-green-600">
                  ${row.high.toFixed(2)}
                </TableCell>
                <TableCell className="text-red-600">
                  ${row.low.toFixed(2)}
                </TableCell>
                <TableCell className="font-medium">
                  ${row.close.toFixed(2)}
                </TableCell>
                <TableCell>{(row.volume / 1_000_000).toFixed(2)}M</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-10 space-y-8  animate-fade-in">
      <div className="flex flex-col space-y-2">
        <Select
          value={selectedSymbol}
          onValueChange={(value) => setSelectedSymbol(value)}
        >
          <SelectTrigger className="w-[280px] bg-white transition-all duration-300 hover:ring-2 hover:ring-[#006200]/20">
            <SelectValue placeholder="Select a stock" />
          </SelectTrigger>
          <SelectContent>
            {AVAILABLE_SYMBOLS.map((symbol) => (
              <SelectItem
                key={symbol}
                value={symbol}
                className="transition-colors hover:bg-[#00620010]"
              >
                {symbol} - {companyNames[symbol]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <h1 className="text-3xl font-bold text-[#006200]">
          {selectedSymbol} - {companyNames[selectedSymbol]}
        </h1>
        <p className="text-muted-foreground">NASDAQ: {selectedSymbol}</p>
      </div>

      <StockStats data={data[0]} />
      <StockChart data={chartData} />
      <StockTable data={data} />
    </div>
  );
};

export default Index;
