import {TextInput} from "@repo/ui/input";
export default function Home(){
  return(
    <div style={{
      height: "100vh",
      width: "100vw",
      background: "black",
      display:"flex",
      justifyContent:"center",
      justifyItems:"center"


    }}>
      <div style={{
        display:"flex",
        justifyContent:"center",
        flexDirection:"column"

      }}>
        <TextInput size="big" placeholder="Room name"></TextInput>
        <input type="text"></input>
        <button>Join Room</button>

      </div>
    </div>
  );
}