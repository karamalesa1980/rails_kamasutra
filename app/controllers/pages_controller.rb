class PagesController < ApplicationController
  def index
    # recipe = Recipe.all.order(created_at: :desc)
    # render json: recipe
  end

  def users_json
    # @users_json = User.paginate(:page => params[:page])
    # render json: {
    #   data: @users_json,
    #   currentPage: @users_json.current_page,
    #   totalUsercount: @users_json.total_pages,
    # }
  end 

  def show
    @profile_json = Profile.find(params[:id])

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render xml: @profile_json }
      format.json {  render json: {data: [@profile_json]}}
    end
  
  end

  # def users_json
    
  #   @users_json = User.order(:id)
  #   render json: {data: @users_json}
     
  # end  
end
