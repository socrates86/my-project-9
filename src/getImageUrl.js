import React from "react";



export default function getImageUrl(imageId, size = "s") {
    return(
        "https://i.imgur.com/" +
    imageId +
    size +
    ".jpg"
    )
}
