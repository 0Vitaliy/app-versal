import { useContext } from "react"
import { observer } from "mobx-react-lite"
import Loader from "../loader"
import { LoaderCTX } from "../loader/store"
import ToastMsg from "../snackbar"
import Header from "./header"

const Layout = observer(({ children }: any) => {
  const { loader } = useContext(LoaderCTX)
  return (
    <div>
      <ToastMsg />
      {loader && <Loader />}
      <Header />
      {children}
    </div>
  )
})

export default Layout