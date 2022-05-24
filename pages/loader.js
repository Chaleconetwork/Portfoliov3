import Router from "next/router";
import React, { useEffect, useState } from "react";

export default function loader() {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoading(
                Router.push('/home')
            )
        }, 8000);
    }, [])


    return (
        <div>
            
        </div>
    )
}
