class ApplicationController < ActionController::Base
    before_action :require_login
    helper_method :current_user

    def current_user
        if session[:user_id]
            User.find(session[:user_id])
        end
    end
    
    private

    def require_login
        unless current_user
            redirect_to login_url
        end
    end
    
end
