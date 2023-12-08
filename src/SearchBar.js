import EmailIcon from "@mui/icons-material/Email";
import "./SearchBar.css";
export default function SearchBar() {
  return (
    <div className="input-container">
      <EmailIcon className="email-icon" />
      <h6 className="para">Enter your email address </h6>
      <button className="btn">Lets Talk </button>
    </div>
  );
}
