import React from "react"

function Extra(props) {
    return (
        <>
            <div class="mb-3">
                <label
                    for="exampleFormControlInput1"
                    class="form-label">{props.placeholderLastName}</label>
                <input type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="lastName"

                    placeholder=" Last Name "
                />
            </div>
        </>
    );
}

export default Extra;
