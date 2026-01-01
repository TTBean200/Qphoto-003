import { getUrl } from "aws-amplify/storage";

export function getContentType( fileName: string) {

    const ext= fileName.split('.').pop()?.toLowerCase();
        let resp: string = "";

        switch (ext) {
            case 'pdf':
                resp= 'application/pdf';
                break;

            case 'jpeg':
            case 'jpg':
            case 'png':
            case 'gif':
            case 'bmp':
                resp= 'image/'+ext;
                break; 
            default: //default goins to files subfolder
                alert('file type :'+ext+' might not be supported. Contact support for details.')
                resp='';
        }
        return resp

}

// export async function getContentUrl( iFrame: HTMLIFrameElement, iPath: string) {

//     if (!iFrame || !iPath ) {
//         console.log("Cann't locate iFrame and/or the file path.")
//         return;
//     }

//     await getUrl( {path: iPath}).then( (data)=>{

//         iFrame.src=data.url.href                     
       
//     })
//     .catch((error)=>
//         console.log( "error in getUrl ", error));              
                
// }


