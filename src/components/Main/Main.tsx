import { useReplaceString } from "../../hooks/useReplaceString"
import "./Main.css"

export const Main = () => {
    const str = useReplaceString('11010111', 'telegram', 200)

    return (
        <div class="wrapper">
            <div class="container">
                <h2 class="title">Is it boring?</h2>
                <a href="https://t.me/console_dot_log" class="contact-button">{str}</a>
            </div>
        </div>
    )
}