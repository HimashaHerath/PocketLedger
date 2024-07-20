class AuthenticationController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:sign_up, :sign_in]

  def sign_up
    user = User.new(user_params)
    if user.save
      token = encode_token(user_id: user.id)
      render json: { user: user, token: token }, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def sign_in
    identifier = params[:identifier]
    user = User.find_by('username = ? OR email = ?', identifier, identifier)
    if user&.authenticate(params[:password])
      token = encode_token(user_id: user.id)
      render json: { user: user, token: token }
    else
      render json: { error: 'Invalid username/email or password' }, status: :unauthorized
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end

  def encode_token(payload)
    JWT.encode(payload, Rails.application.secret_key_base)
  end
end
