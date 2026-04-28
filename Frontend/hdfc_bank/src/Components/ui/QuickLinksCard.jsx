import { NavLink } from "react-router-dom";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

export default function QuickLinksCard({ quickLinks }) {
  return (
    <>
      {quickLinks.map((quickLink) => {
        return (
          <>
            <span className="quickLink_img_icon">{quickLink.img}</span>
            <NavLink className="quickLink_name" href={quickLink.to}>
              {quickLink.name}
            </NavLink>
            <span className="arrow_forward_icon">
              <ArrowForwardIosSharpIcon />
            </span>
            <hr />
          </>
        );
      })}
    </>
  );
}
