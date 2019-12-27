class Api::V1::UsersController < ApplicationController
  def index
    @users_json = User.paginate(:page => params[:page])
    render json: {
      data: @users_json,
      currentPage: @users_json.current_page,
      totalUsercount: @users_json.total_pages,
    }
  end

  def create
  end

  def show
    if user
      render json: [user]
    else
      render json: user.errors
    end
  end

  def destroy
  end

  private

  

  def user
    @user ||= User.find(params[:id])
  end
end
