class PagesController < ApplicationController
  def index
  end

  def users_json
    
      @users_json = User.all
  
      render json: {data: @users_json}
     
  end  
end
