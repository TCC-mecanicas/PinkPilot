import PropTypes from 'prop-types';

const Loading = ({ isLoading }) => {
    
    return (
        <div>
        {isLoading && (
            <div className="flex items-center justify-center mt-2">
            <div className="spinner-border text-blue-500" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            </div>
        )}
        </div>
    );
    };

    Loading.propTypes = {
        isLoading: PropTypes.bool.isRequired,
      };

export default Loading;