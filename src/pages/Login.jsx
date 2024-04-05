import { useEffect, useState } from 'react'

const Login = () => {
    const data = {
        name: "",
        email: "",
        password: ""

    }
    const [inputData, setInputData] = useState(data)
    const [flag, setFlag] = useState(false)
    useEffect(() => {
        console.log("Registerd")
    }, [flag])


    const handleData = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
        console.log(inputData)
    }
    const submitHandle = (e) => {
        e.preventDefault();
        if (!inputData.name || !inputData.email || !inputData.password) {
            alert('All field is Mondatory')
        } else {
            setFlag(true)
        }

        alert("Do you want to login")


    }
    return (
        <>
            <pre>{(flag) ? <h2>helloo  {inputData.name}, You have Registerd Successfully</h2> : ""}</pre>
            <div className='w-80 bg-black shadow-round'>
                <h1 className='text-3xl font-bold underline color-black'>Login</h1>
                <div className="form">
                    <form onSubmit={submitHandle}>
                        <div className="form-input">
                            <input
                                type='name'
                                name='name'
                                value={inputData.name}
                                placeholder="Enter your email here"
                                onChange={handleData}
                            />
                        </div><br />
                        <div className="form-input">
                            <input
                                type='email'
                                name='email'
                                value={inputData.email}
                                placeholder="Enter your email here"
                                onChange={handleData}
                            />
                        </div><br />
                        <div className="form-input">
                            <input
                                type='password'
                                name='password'
                                value={inputData.password}
                                placeholder="Enter your password here"
                                onChange={handleData}
                            />
                        </div>
                        <br />
                        <div className="btn-submit btn">
                            <button type='submit' >Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
