function Input({label, placeholder, isRequired, nameinput}) {
    return (
        <div>
            <label className='text-lg font-medium'htmlFor={nameinput}>Ваше имя</label>
                        <input
                            type='text'
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder={placeholder}
                            required={isRequired}
                            id={nameinput}
                            name={nameinput}
                        />
            
        </div>
    )
}

export default Input;