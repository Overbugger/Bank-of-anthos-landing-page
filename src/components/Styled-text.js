import {Icons} from "./Icons";

function StyledText({text}) {
  return (
<span className="mx-1 text-[#008A20]">{text}<Icons.underline className="pointer-events-none absolute inset-x-0 -bottom-6 text-[#008A20] w-44" /></span>  )
}

export default StyledText