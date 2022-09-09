const button =document.querySelector('button');

let model;
let backdrop;

button.addEventListener('click',showModelHandler);

function showModelHandler() {
    if(model) {
        return ;
    }
model=document.createElement('div');
model.className='model';

const modelText=document.createElement('div');
modelText.textContent='Are you sure?';

const modelCancelAction=document.createElement('button');
modelCancelAction.textContent='Cancel';
modelCancelAction.className='btn btn--alt';
modelCancelAction.addEventListener('click',closeModelHandler);


const modelConfirmAction =document.createElement('button');
modelConfirmAction.textContent='Confirm';
modelConfirmAction.className='btn';
modelConfirmAction.addEventListener('click', closeModelHandler);

model.append(modelText);
model.append(modelCancelAction);
model.append(modelConfirmAction);

document.body.style.background='rgba(0,0,0,0.5)'
document.body.append(model); 

};

function closeModelHandler() {
    model.remove();
    model=null
    document.body.style.background='rgb(200, 203, 203)'
}