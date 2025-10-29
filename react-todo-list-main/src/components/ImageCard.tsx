import React from "react";

type ImageCardProps = {
    src: string;
    legenda: string;
};

export const ImageCard: React.FC<ImageCardProps> = ({ src, legenda }) => {
    return (
    <div
        style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "8px",
        textAlign: "center",
        width: "300px",
        }}
    >
        <img
        src={src}
        alt={legenda}
        style={{ width: "100%", borderRadius: "8px" }}
        />
        <p>{legenda}</p>
    </div>
    );
};
