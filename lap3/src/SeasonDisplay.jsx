import React from "react";

const seasonConfig = {
   summer: {
      text: "Nóng Quá, thèm VitaminC",
      backgroundColor: "red",
   },
   winter: {
      text: "Trời ơi, nó lạnh",
      backgroundColor: "#00FFFF",
   },
};

const getSeason = (lat, month) => {
   if (month >= 2 && month <= 9) {
      return lat > 0 ? 'summer' : 'winter';
   } else {
      return lat > 0 ? 'winter' : 'summer';
   }
};

const Season = props => {
   const season = getSeason(props.lat, new Date().getMonth());
   const { text,backgroundColor } = seasonConfig[season];
   
   return (
    <center style={{ marginTop:'50px'}}>
        <div style={{textAlign:'center',backgroundColor:backgroundColor,width:'400px',height:'300px',display:'flex',justifyContent:'center',alignItems:'center',color:'white'}}>
         <h1>{text}</h1>
      </div>
    </center>
   );
};

export default Season;
