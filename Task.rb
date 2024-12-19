# Gemfile
gem 'pg'
gem 'mongoid'

# app/models/task.rb
class Task
  include Mongoid::Document
  field :title, type: String
  field :status, type: String
end

# config/routes.rb
Rails.application.routes.draw do
  resources :tasks, only: [:index, :create]
end

# app/controllers/tasks_controller.rb
class TasksController < ApplicationController
  def index
    tasks = Task.all
    render json: tasks
  end

  def create
    task = Task.new(task_params)
    if task.save
      render json: task, status: :created
    else
      render json: task.errors, status: :unprocessable_entity
    end
  end

  private

  def task_params
    params.require(:task).permit(:title, :status)
  end
end
