import { observer } from "mobx-react-lite"
import { useContext } from "react"
import Loader from "../loader"
import { LoaderCTX } from "../loader/store"
import Header from "./header"

const Layout = observer(({ children }: any) => {
  const { loader } = useContext(LoaderCTX)
  return (
    <div>
      {loader && <Loader />}
      <Header />
      {children}
    </div>
  )
})

export default Layout