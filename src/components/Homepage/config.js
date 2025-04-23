export const config = {
  initialMessages: [{
    message: "Hello! Welcome to Bank of Anthos. How can I help you today?",
    type: "bot",
    id: 1
  }],
  botName: "Anthony",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#008A20",
    },
    chatButton: {
      backgroundColor: "#008A20",
    },
  },
  widgets: [
    {
      widgetName: "accountBalance",
      widgetFunc: (props) => <BalanceWidget {...props} />,
      mapStateToProps: ["messages"]
    }
  ]
};

const BalanceWidget = (props) => (
  <div className="bg-white p-4 rounded-lg shadow-lg">
    <h3 className="text-[#008A20] font-bold">Account Balance</h3>
    <p className="text-gray-600 mt-2">Current Balance: &#8358;2,450.00</p>
  </div>
);
export default config;