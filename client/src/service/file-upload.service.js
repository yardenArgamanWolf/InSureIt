
import axios from 'axios';


const BASE_URL = 'http://localhost:3000';

function upload(formData) {
    const url = `${BASE_URL}/upload-doc`;
    console.log('FRONT:', formData)
    const body = {
        data: formData
    }
    console.log('bbbb:',body)
    return axios.post(url, formData,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    })
        .then(x => { x.data })
        // add url field
        .then(x => x.map(img => Object.assign({},
            console.log('x2:', x),
            img, { url: `${BASE_URL}/upload-doc/${img.id}` })));
}

export { upload }