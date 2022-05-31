class TaskController < ApplicationController
    before_action :set_task, only: %i[ show edit update destroy ]
    def index
    end

    def get_tasks
        @order = params[:task_type] ? params[:task_type] : 'created_at'
        @search = params[:search]
        if @search
            @task = Task.where("task LIKE ?", "%" + params[:search] + "%")
            .or(Task.where("due_date LIKE ?", "%" + params[:search] + "%"))
            .or(Task.where("priority LIKE ?", "%" + params[:search] + "%"))
            .or(Task.where("description LIKE ?", "%" + params[:search] + "%"))
            .or(Task.where("status LIKE ?", "%" + params[:search] + "%"))
            .order("#{@order} DESC")
        else
            @task = Task.order("#{@order} DESC")
        end
        @count = @task.count
        render json: {
            status: true,
            message: "Success fetch tasks",
            results: @task,
            total: @count,
            asd: @order,
        }
    end

    def new
        @task = Task.new
    end

    def show
        @task = Task.find(params[:id])

        render json: {
            status: true,
            message: "Success fetch task",
            results: @task
        }
    end    

    def create
        @task = Task.create(task: params[:task], due_date: params[:due_date], priority: params[:priority], description: params[:description])
        render json: {
            status: true,
            message: "Success create tasks"
        }
    end

    def update
        @task = Task.find(params[:id])
        if @task.update(task: params[:task], due_date: params[:due_date], priority: params[:priority], description: params[:description])
        render json: {
            status: true,
            message: "Success update tasks"
        }
        else 
            render json: { result: false, msg: "Update Failed "}
        end
    end

    def today
        @task = Task.where(due_date: Date.today, status: "Uncomplete")
        render json: {
            status: true,
            message: "Success get tasks today",
            results: @task,
            asd: Date.today,
        }
    end
    

    def destroy
        @task = Task.find(params[:id])
        @task.destroy
        render json: {
            status: true,
            message: "Success delete tasks"
        }
    end

    def status
        @task = Task.find(params[:id])
        @status = @task.status == 'Uncomplete' ? 'Complete' : 'Uncomplete'
        if @task.update(status: @status)
        render json: {
            status: true,
            message: "Success update tasks"
        }
        else 
        render json: { result: false, msg: "Update Failed "}
        end
    end
    
    
    

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_task
      @task = Task.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def task_params
      params.require(:task).permit(:task, :due_date, :priority)
    end  
end
