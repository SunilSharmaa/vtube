const ChatMessages = ({name, message}) => {
    
    return (
        <div className="flex items-center my-1">
            <img src="https://purepng.com/public/uploads/large/purepng.com-user-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596134a4bio.png" className="w-8" alt="dp" />
            <div className="ml-1">   
            <span className="font-semibold text-neutral-600">{name} :</span>
            <span className="ml-2 text-sm leading-0">{message}</span>
            </div>
        </div>
    )
}

export default ChatMessages;