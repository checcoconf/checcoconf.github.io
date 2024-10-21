import Twemoji from 'react-twemoji';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const EmojiRender = ({children}) => {
    return (
        <Twemoji options={{
            className: 'twemoji',
            folder: 'svg',
            ext: '.svg',
            base: '/path/to/your/local/twemoji/'
        }}>
            {children}
        </Twemoji>
    );
};
