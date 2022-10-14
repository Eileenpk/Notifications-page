import data from './data'

export default function Card({src, name, action, post, group, pictureSrc, message, time, read, count }) { 
    
        const styles = {
            backgroundColor: count > 0 && read ? '#F7FAFD' : '#FFF',
        }
        const pStyles = {
            width: action === 'commented on your picture' ? '197px' : ''
        }
        const marginStyles = {
            paddingRight: count > 0 ?  '0' : ''
        }
        
        return (
            <section className='card' style={styles} >
                
                <img className='card--img' src={src} alt={`${name}'s avatar`}/>
                <div className='card--inner_text_wrapper'>
                    
                    <div className='card--action'>
                        <div style={pStyles} className='card--text'>
                            <span className='card--header'>{name}</span>
                            <span>{action}</span>
                            {post && <span className='bold card--post' style={marginStyles}>{post}</span>}
                            {group && <span className='card--group'>{group}</span>}
                            {count > 0 && read && <div className="card--unread-mark" ></div>}
                        </div>
                        
                        
                    </div>
                    {pictureSrc && <img className='card--photo-comment' src={pictureSrc} alt={`${name} playing chess`}/> }
                    
                    
                    
                    <div className='card--time'>{time}</div>
                    {message && <div className='card--message'>{message}</div>}
                </div>
            </section>
        ) 
}