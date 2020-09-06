import React from 'react';

function Title ({name, title})  {
		return (
            <div className="row">
                <div className="col-10 mx-auto my-2 text-title">
                    <h3 className="text-capitalize font-weight-light mt-2">
                        {name} {title}
                    </h3>
                </div>
            </div>
		);
}

export default Title;