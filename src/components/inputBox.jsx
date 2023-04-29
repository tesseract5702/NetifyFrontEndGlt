import { useState } from "react";


export default function InputBox(props)
{
    
    return(
        <>
            <label htmlFor="basic-url" className="form-label"><h3>{props.titleContent}</h3></label>
            <div className="input-group mb-3">
                <input type={props.type} name={props.name} className="form-control" id={props.titleContent} onChange={props.onChange} placeholder={props.titleContent} aria-describedby="basic-addon3" required/>
            </div>
        </>
    );
}