// "use client";

// import { SignUp } from "@clerk/nextjs";
// import { PopupButton } from "@typeform/embed-react";

// export default function Page() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-2">
//       <div className="text-center mb-6">
//         <h1 className="text-2xl font-bold mb-2">Benvenuto!</h1>
//         <p className="text-sm text-gray-600">
//           Prima di iniziare, è necessario compilare il seguente modulo. ".
//         </p>
//       </div>
//       <PopupButton
//         id="https://visionassociation.typeform.com/to/VEI1V3iT"
//         style={{ fontSize: 20 }}
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       >
//         Clicca e compila il questionario
//       </PopupButton>
//       <p>
//         Una volta dato il consenso all'utilizzo dei tuoi dati, potrai accedere
//         alla piattaforma impostando la password con l'email che hai utilizzato
//         nel modulo:
//       </p>

//       <SignUp />
//     </div>
//   );
// }

import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return <SignUp />;
}
