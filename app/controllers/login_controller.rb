class LoginController < ApplicationController
  skip_before_action :require_login
  
  def new
    @user = User.new
  end
  
  def index
  end

  def logout
    reset_session
    render json: {
      status: true,
      message: "Success logout"
    }
  end

  def login
    @user = User.find_by(email: params[:email])

    if @user && @user.is_password?(params[:password])
      session[:user_id] = @user.id
      render json: {
        status: true,
        message: "Success login"
      }
    else
      render json: {
        status: false,
        message: "Invalid email or password"
      }, :status => 400 
    end

    # private
    # def user_params
    #   params.require(:user).permit(:email, :password)
    # end
  end
end
