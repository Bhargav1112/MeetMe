export const isLoggedIn = () => {
  const user = localStorage.getItem("userInfo") && JSON.parse(localStorage.getItem("userInfo"))
  if(user){
    return {user, loggedIn: true}
  }else{
    return {user:null, loggedIn: false}
  }
}