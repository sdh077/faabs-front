import { archive } from "$types/archive";
import React from "react";
import { useParams } from "react-router-dom";
import "./style.css";

const UserItem = () => {
    const archives: archive[] = [
        {
            id: 1,
            title: 'title1 LOGO',
            subTitle: 'sub',
            content: `
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            `,
            img: null
        },
        {
            id: 2,
            title: 'title1',
            subTitle: null,
            content: 'content',
            img: null
        },
        {
            id: 3,
            title: 'title1',
            subTitle: 'sub',
            content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
            img: '1.jpg'
        }
    ]
    const { id } = useParams();
    return (
        <div>
            {archives.map((archive) => (
                <article key={archive.id} className="article">
                    <div>
                        <div className="title">{archive.title}</div>
                        <h2 className="sub-title">{archive.subTitle}</h2>
                    </div>
                    {archive.img && (<div>
                        <div>
                            <img className="center" src={"img/" + archive.img} />
                        </div>
                    </div>)}
                    <div className="content">{archive.content}</div>
                    <hr />
                </article>
            ))}
        </div>);
};

export default UserItem;
