import React from "react";
import CommentItem from './CommentItem'
function CommentList(){
    var arr=[
        {
            image_comment:"https://s.dowload.vn/data/image/2018/06/10/Hinh-nen-Naruto-2.jpg",
            name_comment:"uzumaki naruto",
            comment:"sản phẩm rất hay,đây là sản phẩm tui tìm kiếm bấy lây nay"
        },
        {
            image_comment:"https://a-static.besthdwallpaper.com/naruto-shippuden-kakashi-hatake-lightning-jutsu-wallpaper-17629_L.jpg",
            name_comment:"hatake kakashi",
            comment:"sản phẩm tôi đã mong đợi từ lâu"
        },
        {
            image_comment:"https://a-static.besthdwallpaper.com/naruto-shippuden-kakashi-hatake-lightning-jutsu-wallpaper-17629_L.jpg",
            name_comment:"hatake kakashi",
            comment:"sản phẩm tôi đã mong đợi từ lâu"
        },
        {
            image_comment:"https://a-static.besthdwallpaper.com/naruto-shippuden-kakashi-hatake-lightning-jutsu-wallpaper-17629_L.jpg",
            name_comment:"hatake kakashi",
            comment:"sản phẩm tôi đã mong đợi từ lâu"
        },
        {
            image_comment:"https://a-static.besthdwallpaper.com/naruto-shippuden-kakashi-hatake-lightning-jutsu-wallpaper-17629_L.jpg",
            name_comment:"hatake kakashi",
            comment:"sản phẩm rất là oke nha"
        },
        {
            image_comment:"https://s.dowload.vn/data/image/2018/06/10/Hinh-nen-Naruto-2.jpg",
            name_comment:"uzumaki naruto",
            comment:"sản phẩm rất hay,đây là sản phẩm tui tìm kiếm bấy lây nay"
        }
    ]
    return(
        <div>
            {
                arr.map((element,key)=>{
                    return(
                        <CommentItem key={key} image={element.image_comment} name={element.name_comment} comments={element.comment} />
                    )
                })
            }
        </div>
    )
}
export default CommentList;