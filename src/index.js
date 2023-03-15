import React from "react"
import { createRoot } from "react-dom/client"

import "./modules/vendors/reset-css/reset-css.scss"
import App from "./modules/App/App.js"

const container = document.getElementById('app')
const root = createRoot(container)

root.render(<App />);