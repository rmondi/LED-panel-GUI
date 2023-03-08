import { LedsProvider } from "../../utils/LedsContext.js"
import Workspace from "../Workspace/Workspace.js"
import Sidebar from "../Sidebar/Sidebar.js"

import "./App.scss"

const App = () => {

  return (
    <LedsProvider>
      <Workspace />
      <Sidebar />
    </LedsProvider>
  )
}

export default App