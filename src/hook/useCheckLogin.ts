import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../store.ts";

export function useCheckLogin() {
  const navigate = useNavigate();
  const account = useSelector((state: RootState) => state.account)

  useEffect(() => {
    console.log(account.email);
    if (!localStorage.getItem('email') && !account.email) {
      navigate('/login')
    }
  }, [account.email])

  return {}
}
