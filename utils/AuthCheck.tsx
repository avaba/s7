import {useRouter} from 'next/router'
import {useTypedSelector} from "../hooks/useTypedSelector";
import Loading from "../components/Loading/Loading";

export const AuthCheck = (props) => {
    const router = useRouter()
    const {isAuth} = useTypedSelector(state => state.login)

    if (typeof window !== 'undefined' && isAuth === false) router.push('/login')

    if (!isAuth) return <Loading/>

    return props.children
}