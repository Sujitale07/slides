"use server"

import { client } from "@/lib/prisma";
import { onCurrentUser } from "../user"
import { addKeyword, addListener, addPost, addTrigger, createAutomation, deleteKeywordQuery, findAutomation, getAutomations } from "./queries";
import { findUser } from "../user/queries";

export const createAutomations = async (id?: string) => {
    const user = await onCurrentUser()
    try {
      const create = await createAutomation(user.id, id)
      if (create) return { status: 200, data: 'Automation created', res: create }
  
      return { status: 404, data: 'Oops! something went wrong' }
    } catch (error) {
      return { status: 500, data: 'Internal server error' }
    }
}
  

export const getAllAutomations =  async ()=>{
    const user = await onCurrentUser();
    try {
        const automations = await getAutomations(user.id);
        if(automations) return {status: 200, data: automations.automations || []}
        return {status: 404, data: []}
    } catch (error) {
        return {status: 500, data: []}
    }
}

export const getAutomationInfo = async (id: string) => {
  await onCurrentUser();

  try {
    const automation = await findAutomation(id);

    if(automation) return {status: 200, automation}

    return {status: 404}
  } catch (error) {
    return {status: 500}
  }
}

export const updateAutomation = async (id:string, update: {name?: string, active?: boolean})=>{
  return client.automation.update({
    where: {
      id  
    }, 
    data: {
     name: update.name,
     active: update.active 
    }
  })
}

export const updateAutomationName = async (automationId: string, data: {name: string, active?: boolean, automation?: string})=>{
  await onCurrentUser();

  try {
    const update = await updateAutomation(automationId, data);

    if(update){
      return {status: 200, data: 'Automation Updated Successfully'}
    }
    
    return {status: 404, data: 'Oops Could not find automation'}
  } catch (error) {
    return {status: 500, data: 'Internal Server Error'}
  }
}

export const saveListener = async (
  automationId: string,
  listener: "SMARTAI" | "MESSAGE",
  prompt: string,
  reply: string
)=>{
  await onCurrentUser();

  try{
    const create = await addListener(automationId, listener, prompt, reply);

    if (create) return {status: 200, data: "Listener Created"}
    return {status: 404, data: "Cant save listener"}
  }catch(err){
    return {status: 500, data: "Oops ! Something went wrong"}
  }
  
}

export const saveTrigger = async (automationId: string, trigger: string[])=>{
  await onCurrentUser();
  try {
    const create = await addTrigger(automationId, trigger)
    if(create)return {status: 200, data: "Trigger Saved"}
    return {status: 404, data: "Cant save trigger"}
  } catch (error) {
    return {status: 500, data: "Oops ! Something went wrong"}
  }
}

export const saveKeyword = async (automationId: string, keyword: string)=>{
  await onCurrentUser();
  try {
    const create = await addKeyword(automationId, keyword)
    if(create)return {status: 200, data: "keyword added successully"}
    return {status: 404, data: "Cant save keywords"}
  } catch (error) {
    return {status: 500, data: "Oops ! Something went wrong"}
  }
}

export const deleteKeyword = async (id: string)=>{
  await onCurrentUser();
  try {
    const deleted = await deleteKeywordQuery(id)
    if(deleted )return {status: 200, data: "keyword deleted successully"}
    return {status: 404, data: "Cant delete keywords"}
  } catch (error) {
    return {status: 500, data: "Oops ! Something went wrong"}
  }
}

export const getProfilePosts = async ()=>{ 
    const user = await onCurrentUser();
    try {
        const profile = await findUser(user.id);
        let posts = await fetch(`${process.env.INSTAGRAM_BASE_URL}/me/media?fields=id,caption,media_url,media_type,timestamp&limit=10&access_token=${profile?.integrations[0]?.token}`);

        const parsed = await posts.json();
        if(parsed) return {status: 200, data: parsed.data}
        console.log("😀 error in getting post")
    } catch (error) {
      console.log("😀 error in getting post")
      return {status: 500}
    }
}

export const savePosts = async (
  automationId:string, 
 posts: {
    postid: string
    caption?: string
    media: string
    mediaType: 'IMAGE' | 'VIDEO' | 'CAROSEL_ALBUM'
  }[]
) => {

  await onCurrentUser();

  try {
    const create = await addPost(automationId, posts);
    if(create) return {status: 200, data: "Post added successfully"}
    return {status: 404, data: "Cant save post"}
  } catch (error) {
    return {status: 500, data: "Oops ! Something went wrong"}
  }


}

export const activateAutomation = async (id: string, state: boolean)=>{
  await onCurrentUser();
  try {
    const update = await updateAutomation(id, {active: state});
    if(update) return {status: 200, data:  `Automation ${state ? 'activated' : 'deactivated'} successfully`}
    
    return {status: 404, data: "Cant activate automation"}
  } catch (error) {
    return {status: 500, data: "Oops ! Something went wrong"}  
  }
}