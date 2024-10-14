import React,{useRef} from "react";
import Spline from '@splinetool/react-spline';

const SplineModelHeader = ()=>{
    const model = useRef();

    const onLoad = (spline)=>{
        console.log(spline);
    }
    
    return(
        <>
            <Spline
                onLoad={onLoad}
            scene="https://prod.spline.design/oDmmJ6sF8VWRXu05/scene.splinecode" />
        </>
    )
}

export default SplineModelHeader;