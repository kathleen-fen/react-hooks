import React, {useContext, useState} from 'react'
import {AlertContext} from './../context/alert/AlertContext'
import {GithubContext} from './../context/github/githubContext'

export const Search = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const github = useContext(GithubContext)
    const onSubmit = event => {
        if (event.key !== 'Enter') {
            return
            /* show('Test alert')
            console.log(value) */
        }
        github.clearUsers()
        if(value.trim()){
            alert.hide()
            github.search(value.trim())

            //console.log('Make request with: ', value)
        } else {
            alert.show("Введите данные пользователя...")
        }
         
    }
    return(
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Введите ник пользователя..."
                value = {value}
                onChange = {event=>setValue(event.target.value)}
                onKeyPress={onSubmit}
            ></input>

        </div>
    )
}