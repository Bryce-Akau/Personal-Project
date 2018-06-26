// import React, { Component } from 'react';
// import axios from 'axios';
// import '../css/product.css';

// export default class Product extends Component{
//     constructor(){
//         super()
//         this.state= {
//             size: '',
//             track: '',
//             trackColor: '',
//             aussieLine: '',
//             reelColor: '',
//             reelSize: '',
//             handleColor: '',
//         }
//     }
//     //     componentDidMount(){
//     //         axios.get()
//     //         .then(response)
//     //         this.setState(() => ({

//     //         }))
//     //     }
//     // }

//     render(){
//         return(
//             <div>
//                 <div className="line one">
//                     <div>
//                         <label for='size' className="fn">Size:</label>
//                         <input 
//                         className="productValue"
//                         type="text"
//                         name="size"
//                         placeholder="80cm"/>
//                     </div>
//                     <div>
//                         <label for='track' className="fn">Track:</label>
//                         <input list="browsers" name="browser" />
//                             <datalist id="browsers">
//                             <option value="Enclosed Track"></option>
//                             <option value="Open Track"></option>
//                             <option value="Deep-Open Track"></option>
//                             </datalist>
//                     </div>
//                     <div>
//                         <label for='tcolor' className="fn">Track Color:</label>
//                         <input list="browsers1" name="browser1" />
//                             <datalist id="browsers1">
//                             <option value="Purple Pearl"></option>
//                             <option value="Sky Blue"></option>
//                             <option value="Red Pearl"></option>
//                             <option value="Galaxy Blue"></option>
//                             </datalist>
//                     </div>
//                 </div>
//                 <div className="line two">
//                     <div>
//                         <label for='line' className="fn">Aussie Line:</label>
//                         <input list="browsers2" name="browser2" />
//                             <datalist id="browsers2">
//                             <option value="Braid Line"></option>
//                             <option value="Pro Line"></option>
//                             </datalist>
//                     </div>
//                     <div>    
//                         <label for='reelColor' className="fn">Reel Color:</label>
//                         <input list="browsers3" name="browser3" />
//                             <datalist id="browsers3">
//                             <option value="Red"></option>
//                             <option value="White"></option>
//                             <option value="Blue"></option>
//                             <option value="Green"></option>
//                             <option value="Black"></option>
//                             <option value="Pink"></option>
//                             <option value="Yellow"></option>
//                             <option value="Orange"></option>
//                             <option value="Purple"></option>
//                             </datalist>
//                     </div>
//                     <div>
//                         <label className="fn">Reel Size:</label>
//                         <input list="browsers4" name="browser" />
//                             <datalist id="browsers4">
//                             <option value="50mm"></option>
//                             <option value="100mm"></option>
//                             </datalist>
//                     </div>
//                 </div>
//                 <div className="line three">
//                     <div>
//                         <label className="fn">Handle Color:</label>
//                         <input list="browsers3" name="browser3" />
//                             <datalist id="browsers3">
//                             </datalist>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

