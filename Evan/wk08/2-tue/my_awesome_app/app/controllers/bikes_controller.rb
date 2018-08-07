class BikesController < ApplicationController
  def index
    @bikes = Bike.all
    @bike = Bike.new
    render :index # optional
  end

  def new
    @bike = Bike.new
  end

  def create
    @bike = Bike.new
    @bike.name = params[:name]
    @bike.description = params[:description]
    @bike.image_url = params[:image_url]
    if @bike.save
      redirect_to '/bikes'
    else
      render :new
    end
  end

  def show
    @bike = Bike.find params[:id]
    render :show
  end

  def destroy
    @bike = Bike.find params[:id]
    if @bike.destroy
      redirect_to '/bikes'
    else
      render :show
    end
  end

  def edit
    @bike = Bike.find params[:id]
    render :edit
  end

  def update
    @bike = Bike.find params[:id]
    @bike.name = params[:name]
    @bike.description = params[:description]
    @bike.image_url = params[:image_url]
    if @bike.save
      redirect_to '/bikes'
    else
      render :edit
    end
  end
end
