import {useForm} from 'react-hook-form'


function App() {

    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur"
    })

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        reset();
    }
    return (
        <div className="App">
            <h1>React hook form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    First Name:
                    <input
                        {...register('firstName', {
                            // можно использовать true
                            required: 'Поле обязательно к заполнению',
                            minLength: {
                                value: 5,
                                message: 'Минимум 5 символов'
                            }

                        })}
                    />
                </label>
                <div style={{height: 40}}>
                    {errors?.firstName && <p>{errors.firstName.message || "Error!"}</p>}
                </div>
                <label>
                    Last Name:
                    <input
                        {...register('lastName', {
                            // можно использовать true
                            required: 'Поле обязательно к заполнению',
                            minLength: {
                                value: 3,
                                message: 'Минимум 3 символов'
                            }

                        })}
                    />
                </label>
                <div style={{height: 40}}>
                    {errors?.lastName && <p>{errors.lastName.message || "Error!"}</p>}
                </div>
                <input type="submit" disabled={!isValid}/>
            </form>
        </div>
    );
}

export default App;
