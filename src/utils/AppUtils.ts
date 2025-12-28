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


