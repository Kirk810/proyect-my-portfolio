import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Contact</h2>
<div>
<a href="https://twitter.com/">${Button("/icons/twitter.png", "Twitter")}</a>
<a href="https://github.com/Kirk810/">${Button("/icons/github.png", "GitHub")}
<a href="https://www.linkedin.com/feed/">${Button("/icons/linkedin.png", "LinkedIn")}
<a href="https://t.me/Adry_89/">${Button("/icons/telegram.png", "Telegram")}
</div>
`;