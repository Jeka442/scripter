
const timeout = 1000;
const actions = [
  {host:"www.alljobs.co.il",action:()=>{document.getElementsByTagName("iframe")[0].scrollIntoView()}}
]



window.onload = () => {
  setTimeout(() => {
    for(let i = 0;i<actions.length;i++){
      console.log("scripter executes: ",actions[i].action);
      if(document.location.host === actions[i].host || actions[i].host === "*") actions[i].action();
    }
  }, timeout);
};

