import data from '../../DATA/ReactResources.md?raw'

import ReactMarkdown from 'react-markdown';

export default function ReactResources(){


    //console.log(data)
    return(<>
            
            <ReactMarkdown>{data}</ReactMarkdown>
    </>)
}