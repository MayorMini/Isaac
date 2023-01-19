import React from 'react'
import './Create.css'
import DatasetLinkedIcon from '@mui/icons-material/DatasetLinked';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ListIcon from '@mui/icons-material/List';

function create() {
  return (
    <div className='container' id='main-activities'>
        <h2 id='activities-head'> Create and Sell your  Nfts</h2>
        <div id='activities'>
            <div id='activities-div'>
                <DatasetLinkedIcon id='icon'/>
                <h3 id='activities-title'> Set up your wallet</h3>
                <p>
                Get more beautiful artwork here, Get more beautiful artwork here
                </p>
            </div>
            <div  id='activities-div'>
                <CreateNewFolderIcon id='icon'/>
                <h3 id='activities-title'> Create Collections</h3>
                <p>
                Get more beautiful artwork here, Get more beautiful artwork here
                </p>
            </div>
            <div  id='activities-div'>
                <AddBoxIcon id='icon'/>
                <h3 id='activities-title'> Add your NFTs</h3>
                <p>
                Get more beautiful artwork here, Get more beautiful artwork here
                </p>
            </div>
            <div  id='activities-div'>
                 <ListIcon id='icon'/>
                <h3 id='activities-title'> List them for sale</h3>
                <p>
                Get more beautiful artwork here, Get more beautiful artwork here
                </p>  
            </div>
        </div>
    </div>
  )
}

export default create