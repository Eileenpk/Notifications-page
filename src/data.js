import markpic from './assets/avatar-mark-webber.webp'
import angelapic from './assets/avatar-angela-gray.webp'
import jacobpic from './assets/avatar-jacob-thompson.webp'
import rizkypic from './assets/avatar-rizky-hasanuddin.webp'
import kimberlypic from './assets/avatar-kimberly-smith.webp'
import chesspic from './assets/image-chess.webp'
import nathanpic from './assets/avatar-nathan-peterson.webp'
import annapic from './assets/avatar-anna-kim.webp'

export default [
    {  name: 'Mark Webber',
       src: markpic,
       read: true,
       action: 'reacted to your recent post',
       post: 'My first tournament today!',
       time: '1m ago'
    },
    {
        name: 'Angela Gray',
        src: angelapic,
        read: true,
        action: 'followed you',
        time: '5m ago'
    },
    {
        name: 'Jacob Thompson',
        src: jacobpic,
        read: true,
        action: 'has joined your group',
        group: 'Chess Club',
        time: '1 day ago'
    },
    {
        name: 'Rizky Hasanuddin', 
        src: rizkypic,
        read: false,
        action: 'sent you a private message',
        time: '5 days ago',
        message: `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
        I'm already having lots of fun and improving my game.`
    },
    {
        name: 'Kimberly Smith', 
        src: kimberlypic,
        read: false,
        action: 'commented on your picture',
        pictureSrc: chesspic,
        time: '1 week ago'
    },
    {
        name: 'Nathan Peterson', 
        src: nathanpic,
        read: false,
        action: 'reacted to your recent post', 
        post: '5 end-game strategies to increase your win rate',
        time: '2 weeks ago'
    },
    {
        name: 'Anna Kim',
        src: annapic,
        read: false,
        action: 'left the group',
        group: 'Chess Club',
        time: '2 weeks ago'
    }

]