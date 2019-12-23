class PagesController < ApplicationController
  def index
  end

  def users_json
    @users_json = User.paginate(:page => params[:page])
    render json: {
      data: @users_json,
      currentPage: @users_json.current_page,
      totalUsercount: @users_json.total_pages,
    }
  end 

  # def users_json
    
  #   @users_json = User.order(:id)
  #   render json: {data: @users_json}
     
  # end  
end
